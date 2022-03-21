USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.alumno_avance_READ') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_READ]
	IF OBJECT_ID('dbo.alumno_avance_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_CREATE]
	IF OBJECT_ID('dbo.alumno_avance_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_UPDATE]
	IF OBJECT_ID('dbo.alumno_avance_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[alumno_avance_DELETE]
*/

CREATE PROCEDURE [dbo].[alumno_avance_READ]
	@Option     TINYINT = NULL,
	@id_avance  INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_avance, a.id_usuario, a.ciclo, a.fecha_registro, a.estado
		FROM 	[dbo].[alumno_avance] a
		WHERE 	(@id_avance  IS NULL OR a.id_avance = @id_avance)
	END

	-- EXEC [dbo].[alumno_avance_READ] @Option = null, @id_avance = null
END
GO


CREATE PROCEDURE [dbo].[alumno_avance_CREATE]
	@Option         TINYINT = NULL,
	@id_usuario     INT,
	@ciclo          INT,
	@fecha_registro DATE,
	@estado         INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_avance INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[alumno_avance] (id_usuario, ciclo, fecha_registro, estado)
							VALUES (@id_usuario, @ciclo, @fecha_registro, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_avance = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_avance id_avance
	-- EXEC [dbo].[alumno_avance_CREATE] @Option = null, @id_usuario = null, @ciclo = null, @fecha_registro = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[alumno_avance_UPDATE]
	@Option         TINYINT = NULL,
	@id_avance      INT,
	@id_usuario     INT,
	@ciclo          INT,
	@fecha_registro DATE,
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[alumno_avance] WHERE id_avance = @id_avance)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[alumno_avance]
			SET 	id_usuario     = @id_usuario,
					ciclo          = @ciclo,
					fecha_registro = @fecha_registro,
					estado         = @estado
			WHERE 	id_avance = @id_avance

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_avance id_avance
	-- EXEC [dbo].[alumno_avance_UPDATE] @Option = null, @id_avance = null, @id_usuario = null, @ciclo = null, @fecha_registro = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[alumno_avance_DELETE]
	@id_avance INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[alumno_avance] WHERE id_avance = @id_avance)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[alumno_avance]
		WHERE  id_avance = @id_avance

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_avance id_avance
	-- EXEC [dbo].[alumno_avance_DELETE] @id_avance = null
END
GO


