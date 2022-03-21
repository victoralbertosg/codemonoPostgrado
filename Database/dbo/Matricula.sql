USE bddPostgrado
GO

/*
	USE bddPostgrado
	GO

	IF OBJECT_ID('dbo.Matricula_READ') IS NOT NULL DROP PROCEDURE [dbo].[Matricula_READ]
	IF OBJECT_ID('dbo.Matricula_CREATE') IS NOT NULL DROP PROCEDURE [dbo].[Matricula_CREATE]
	IF OBJECT_ID('dbo.Matricula_UPDATE') IS NOT NULL DROP PROCEDURE [dbo].[Matricula_UPDATE]
	IF OBJECT_ID('dbo.Matricula_DELETE') IS NOT NULL DROP PROCEDURE [dbo].[Matricula_DELETE]
*/

CREATE PROCEDURE [dbo].[Matricula_READ]
	@Option       TINYINT = NULL,
	@id_matricula INT = NULL
AS
BEGIN

	IF @Option = 1
	BEGIN
		SELECT 	a.id_matricula, a.id_usuario, a.id_periodo, a.id_mencion, a.ciclo, 
				a.estado
		FROM 	[dbo].[Matricula] a
		WHERE 	(@id_matricula IS NULL OR a.id_matricula = @id_matricula)
	END

	-- EXEC [dbo].[Matricula_READ] @Option = null, @id_matricula = null
END
GO


CREATE PROCEDURE [dbo].[Matricula_CREATE]
	@Option     TINYINT = NULL,
	@id_usuario INT,
	@id_periodo INT,
	@id_mencion INT,
	@ciclo      INT,
	@estado     INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)
DECLARE @Insertedid_matricula INT

SET @ErrorId = 0
SET @Message = ''

	IF @Option = 1
	BEGIN
		IF @ErrorId = 0
		BEGIN
			INSERT INTO [dbo].[Matricula] (id_usuario, id_periodo, id_mencion, ciclo, estado)
							VALUES (@id_usuario, @id_periodo, @id_mencion, @ciclo, @estado)
			
			SET @Message = CONCAT(@@ROWCOUNT, ' record inserted')
		SET @Insertedid_matricula = @@IDENTITY
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @Insertedid_matricula id_matricula
	-- EXEC [dbo].[Matricula_CREATE] @Option = null, @id_usuario = null, @id_periodo = null, @id_mencion = null, @ciclo = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[Matricula_UPDATE]
	@Option       TINYINT = NULL,
	@id_matricula INT,
	@id_usuario   INT,
	@id_periodo   INT,
	@id_mencion   INT,
	@ciclo        INT,
	@estado       INT
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
			IF NOT EXISTS(SELECT 1 FROM [dbo].[Matricula] WHERE id_matricula = @id_matricula)
			BEGIN
				SET @ErrorId = 10
				SET @Message = 'Record not found'
			END
		END

		IF @ErrorId = 0
		BEGIN
			UPDATE  [dbo].[Matricula]
			SET 	id_usuario   = @id_usuario,
					id_periodo   = @id_periodo,
					id_mencion   = @id_mencion,
					ciclo        = @ciclo,
					estado       = @estado
			WHERE 	id_matricula = @id_matricula

			SET @Message = CONCAT(@@ROWCOUNT, ' record updated')
		END
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_matricula id_matricula
	-- EXEC [dbo].[Matricula_UPDATE] @Option = null, @id_matricula = null, @id_usuario = null, @id_periodo = null, @id_mencion = null, @ciclo = null, @estado = null
END
GO


CREATE PROCEDURE [dbo].[Matricula_DELETE]
	@id_matricula INT
AS
BEGIN

DECLARE @ErrorId TINYINT
DECLARE @Message VARCHAR(100)

SET @ErrorId = 0
SET @Message = ''

	IF @ErrorId = 0
	BEGIN
		IF NOT EXISTS(SELECT 1 FROM [dbo].[Matricula] WHERE id_matricula = @id_matricula)
		BEGIN
			SET @ErrorId = 10
			SET @Message = 'Record not found'
		END
	END

	IF @ErrorId = 0
	BEGIN
		DELETE
		FROM   [dbo].[Matricula]
		WHERE  id_matricula = @id_matricula

		SET @Message = CONCAT(@@ROWCOUNT, ' record deleted')
	END
	
	SELECT @ErrorId ErrorId, @Message Message, @id_matricula id_matricula
	-- EXEC [dbo].[Matricula_DELETE] @id_matricula = null
END
GO


