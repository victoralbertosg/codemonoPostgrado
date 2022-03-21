USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.mencion_READ') IS NOT NULL DROP PROCEDURE [dbo].[mencion_READ]
	IF OBJECT_ID('dbo.mencion_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_CREATE]
	IF OBJECT_ID('dbo.mencion_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_UPDATE]
	IF OBJECT_ID('dbo.mencion_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[mencion_DELETE]
*/

CREATE PROCEDURE [dbo].[mencion_READ]
	@Option      TINYINT = NULL,
	@id_mencion  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_mencion, a.id_facultad, a.nombre
		FROM 	[dbo].[mencion] a
		WHERE 	(@id_mencion  IS NULL OR a.id_mencion = @id_mencion)
	END

	-- EXEC [dbo].[mencion_READ] @Option = null, @id_mencion = null
END
GO


CREATE PROCEDURE [dbo].[mencion_CREATE]
	@Option      TINYINT = NULL,
	@id_facultad INT,
	@nombre      NCHAR(45)
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_mencion INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[mencion] (id_facultad, nombre)
							VALUES (@id_facultad, @nombre)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_mencion = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_mencion id_mencion
	-- EXEC [dbo].[mencion_CREATE] @Option = null, @id_facultad = null, @nombre = null
END
GO


CREATE PROCEDURE [dbo].[mencion_UPDATE]
	@Option      TINYINT = NULL,
	@id_mencion  INT,
	@id_facultad INT,
	@nombre      NCHAR(45)
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[mencion] WHERE id_mencion = @id_mencion)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[mencion]
			SET 	id_facultad = @id_facultad,
					nombre      = @nombre
			WHERE 	id_mencion = @id_mencion

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_mencion id_mencion
	-- EXEC [dbo].[mencion_UPDATE] @Option = null, @id_mencion = null, @id_facultad = null, @nombre = null
END
GO


CREATE PROCEDURE [dbo].[mencion_DELETE]
	@id_mencion INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[mencion] WHERE id_mencion = @id_mencion)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[mencion]
		WHERE  id_mencion = @id_mencion

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_mencion id_mencion
	-- EXEC [dbo].[mencion_DELETE] @id_mencion = null
END
GO


