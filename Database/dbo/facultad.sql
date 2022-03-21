USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.facultad_READ') IS NOT NULL DROP PROCEDURE [dbo].[facultad_READ]
	IF OBJECT_ID('dbo.facultad_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[facultad_CREATE]
	IF OBJECT_ID('dbo.facultad_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[facultad_UPDATE]
	IF OBJECT_ID('dbo.facultad_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[facultad_DELETE]
*/

CREATE PROCEDURE [dbo].[facultad_READ]
	@Option      TINYINT = NULL,
	@id_facultad INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_facultad, a.nombre
		FROM 	[dbo].[facultad] a
		WHERE 	(@id_facultad IS NULL OR a.id_facultad = @id_facultad)
	END

	-- EXEC [dbo].[facultad_READ] @Option = null, @id_facultad = null
END
GO


CREATE PROCEDURE [dbo].[facultad_CREATE]
	@Option    TINYINT = NULL,
	@nombre    NVARCHAR(50)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_facultad INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[facultad] (nombre)
							VALUES (@nombre)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_facultad = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_facultad id_facultad
	-- EXEC [dbo].[facultad_CREATE] @Option = null, @nombre = null
END
GO


CREATE PROCEDURE [dbo].[facultad_UPDATE]
	@Option      TINYINT = NULL,
	@id_facultad INT,
	@nombre      NVARCHAR(50)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	
	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			IF NOT EXISTS(SELECT 1 FROM [dbo].[facultad] WHERE id_facultad = @id_facultad)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[facultad]
			SET 	nombre      = @nombre
			WHERE 	id_facultad = @id_facultad

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_facultad id_facultad
	-- EXEC [dbo].[facultad_UPDATE] @Option = null, @id_facultad = null, @nombre = null
END
GO


CREATE PROCEDURE [dbo].[facultad_DELETE]
	@id_facultad INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[facultad] WHERE id_facultad = @id_facultad)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[facultad]
		WHERE  id_facultad = @id_facultad

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_facultad id_facultad
	-- EXEC [dbo].[facultad_DELETE] @id_facultad = null
END
GO


