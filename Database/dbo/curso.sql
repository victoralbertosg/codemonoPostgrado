USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.curso_READ') IS NOT NULL DROP PROCEDURE [dbo].[curso_READ]
	IF OBJECT_ID('dbo.curso_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[curso_CREATE]
	IF OBJECT_ID('dbo.curso_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[curso_UPDATE]
	IF OBJECT_ID('dbo.curso_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[curso_DELETE]
*/

CREATE PROCEDURE [dbo].[curso_READ]
	@Option       TINYINT = NULL,
	@id_curso     INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_curso, a.id_mencion, a.nombre_curso, a.credito, a.prerequisito, 
				a.ciclo
		FROM 	[dbo].[curso] a
		WHERE 	(@id_curso     IS NULL OR a.id_curso = @id_curso)
	END

	-- EXEC [dbo].[curso_READ] @Option = null, @id_curso = null
END
GO


CREATE PROCEDURE [dbo].[curso_CREATE]
	@Option       TINYINT = NULL,
	@id_mencion   INT,
	@nombre_curso NCHAR(60),
	@credito      INT,
	@prerequisito INT,
	@ciclo        INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_curso INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[curso] (id_mencion, nombre_curso, credito, prerequisito, ciclo)
							VALUES (@id_mencion, @nombre_curso, @credito, @prerequisito, @ciclo)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_curso = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_curso id_curso
	-- EXEC [dbo].[curso_CREATE] @Option = null, @id_mencion = null, @nombre_curso = null, @credito = null, @prerequisito = null, @ciclo = null
END
GO


CREATE PROCEDURE [dbo].[curso_UPDATE]
	@Option       TINYINT = NULL,
	@id_curso     INT,
	@id_mencion   INT,
	@nombre_curso NCHAR(60),
	@credito      INT,
	@prerequisito INT,
	@ciclo        INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[curso] WHERE id_curso = @id_curso)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[curso]
			SET 	id_mencion   = @id_mencion,
					nombre_curso = @nombre_curso,
					credito      = @credito,
					prerequisito = @prerequisito,
					ciclo        = @ciclo
			WHERE 	id_curso = @id_curso

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso id_curso
	-- EXEC [dbo].[curso_UPDATE] @Option = null, @id_curso = null, @id_mencion = null, @nombre_curso = null, @credito = null, @prerequisito = null, @ciclo = null
END
GO


CREATE PROCEDURE [dbo].[curso_DELETE]
	@id_curso INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[curso] WHERE id_curso = @id_curso)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[curso]
		WHERE  id_curso = @id_curso

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_curso id_curso
	-- EXEC [dbo].[curso_DELETE] @id_curso = null
END
GO


