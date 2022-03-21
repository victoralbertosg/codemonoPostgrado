USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.inscripcion_READ') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_READ]
	IF OBJECT_ID('dbo.inscripcion_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_CREATE]
	IF OBJECT_ID('dbo.inscripcion_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_UPDATE]
	IF OBJECT_ID('dbo.inscripcion_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[inscripcion_DELETE]
*/

CREATE PROCEDURE [dbo].[inscripcion_READ]
	@Option         TINYINT = NULL,
	@id_inscripcion INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_inscripcion, a.id_mencion, a.id_usuario, a.urlfile, a.estado
		FROM 	[dbo].[inscripcion] a
		WHERE 	(@id_inscripcion IS NULL OR a.id_inscripcion = @id_inscripcion)
	END

	-- EXEC [dbo].[inscripcion_READ] @Option = null, @id_inscripcion = null
END
GO


CREATE PROCEDURE [dbo].[inscripcion_CREATE]
	@Option     TINYINT = NULL,
	@id_mencion INT,
	@id_usuario INT,
	@urlfile    NCHAR(200),
	@estado     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_inscripcion INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[inscripcion] (id_mencion, id_usuario, urlfile, estado)
							VALUES (@id_mencion, @id_usuario, @urlfile, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_inscripcion = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_CREATE] @Option = null, @id_mencion = null, @id_usuario = null, @urlfile = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[inscripcion_UPDATE]
	@Option         TINYINT = NULL,
	@id_inscripcion INT,
	@id_mencion     INT,
	@id_usuario     INT,
	@urlfile        NCHAR(200),
	@estado         INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[inscripcion] WHERE id_inscripcion = @id_inscripcion)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[inscripcion]
			SET 	id_mencion     = @id_mencion,
					id_usuario     = @id_usuario,
					urlfile        = @urlfile,
					estado         = @estado
			WHERE 	id_inscripcion = @id_inscripcion

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_UPDATE] @Option = null, @id_inscripcion = null, @id_mencion = null, @id_usuario = null, @urlfile = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[inscripcion_DELETE]
	@id_inscripcion INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[inscripcion] WHERE id_inscripcion = @id_inscripcion)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[inscripcion]
		WHERE  id_inscripcion = @id_inscripcion

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_inscripcion id_inscripcion
	-- EXEC [dbo].[inscripcion_DELETE] @id_inscripcion = null
END
GO


